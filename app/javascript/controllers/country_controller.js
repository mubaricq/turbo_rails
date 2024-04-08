import { Controller } from "@hotwired/stimulus"
import { get } from "@rails/request.js"

// Connects to data-controller="country"
export default class extends Controller {
  static targets = ["stateSelect"]
  static values = {
    url: String
  }
  connect() {
    
  }

  next(event){
    
    let url = this.urlValue
    let country = event.target.selectedOptions[0].value;
    let target = this.stateSelectTarget.id
    get(`${url}?target=${target}&country=${country}`, {
      responseKind: "turbo-stream"
    })
  }
}
