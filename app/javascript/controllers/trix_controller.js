import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    Trix.config.fileSize.prefix = "SI"
    Trix.config.blockAttributes.h2 = {tagName: "h2", terminal: true, breakOnReturn: true, group: false}
    Trix.config.blockAttributes.h3 = {tagName: "h3", terminal: true, breakOnReturn: true, group: false}
  }

  configureToolbar(event) {
    const groupElement = event.target.toolbarElement.querySelector(".trix-button-group--block-tools")
    const h1 = event.target.toolbarElement.querySelector(".trix-button--icon-heading-1")
    h1.insertAdjacentHTML("afterend", '<button type="button" class="trix-button" data-trix-attribute="h3" title="H3">H3</button>')
    h1.insertAdjacentHTML("afterend", '<button type="button" class="trix-button" data-trix-attribute="h2" title="H2">H2</button>')
    groupElement.insertAdjacentHTML("beforeend",
        '<button type="button" class="trix-button trix-button--icon trix-button--icon-horizontal-rule" data-trix-action="x-horizontal-rule" tabindex="-1" title="Add divider"></button>')
  }

  invokeAction(event) {
    if (event.actionName === "x-horizontal-rule") {
      const attachment = new Trix.models.Attachment({ content: "<hr>", contentType: "vnd.rubyonrails.horizontal-rule.html" })
      event.target.editor.insertAttachment(attachment)
    }
  }
}
