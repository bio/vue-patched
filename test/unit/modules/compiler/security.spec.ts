import { compile } from 'web/compiler/index'
import { parseHTML } from 'compiler/parser/html-parser'

describe('compiler security patches', () => {
  afterEach(() => {
    delete (Object.prototype as any).staticClass
    delete (Object.prototype as any).staticStyle
  })

  it('should ignore Object.prototype.staticClass during codegen', () => {
    ;(Object.prototype as any).staticClass = 'POLLUTED'
    const { render } = compile('<div class="">x</div>')
    expect(render).not.toContain('POLLUTED')
  })

  it('should ignore Object.prototype.staticStyle during codegen', () => {
    ;(Object.prototype as any).staticStyle = 'POLLUTED'
    const { render } = compile('<div style="">x</div>')
    expect(render).not.toContain('POLLUTED')
  })

  it('should still generate own static class and style', () => {
    const { render } = compile('<div class="foo" style="color:red">x</div>')
    expect(render).toContain('staticClass:"foo"')
    expect(render).toContain('staticStyle')
  })

  // #CVE-2024-9506
  it('should not hang on mismatched plaintext end tags', () => {
    const html = `<script>${'<'.repeat(10000)}</textarea>`
    const start = Date.now()
    parseHTML(html, {
      start() {},
      end() {},
      chars() {},
      comment() {}
    })
    expect(Date.now() - start).toBeLessThan(2000)
  })
})
