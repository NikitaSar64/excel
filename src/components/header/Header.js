import { ExcelComponent } from "@core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = "excel__header";
  toHTML() {
    return `
        <input class="input" type="text" value="Новая таблица" />

        <div class="">
            <div class="button">
                <span class="material-symbols-outlined">delete</span>
            </div>
            <div class="button">
                <span class="material-symbols-outlined">exit_to_app</span>
            </div>
        </div>
        `;
  }
}
