import { Component, input, computed } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-icon",
	imports: [CommonModule],
	templateUrl: "./icon.html",
	styleUrl: "./icon.css",
})
export class Icon {
	color = input<string>("var(--color-white-1)");
	size = input<number>(18);
	icon = input.required<string | undefined>();

	public fillColor = computed(() => `${this.color()}`);
	public iconSelector = computed(() => this.icon());
	public iconSize = computed(() => `${this.size()}px`);
}
