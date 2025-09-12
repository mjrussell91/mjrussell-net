import { Component, input, computed } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-icon",
	imports: [CommonModule],
	templateUrl: "./icon.html",
	styleUrl: "./icon.css",
})
export class Icon {
	readonly color = input<string>("var(--color-white-1)");
	readonly size = input<number>(18);
	readonly icon = input.required<string | undefined>();

	public readonly fillColor = computed(() => this.color());
	public readonly iconSelector = computed(() => this.icon());
	public readonly iconSize = computed(() => `${this.size().toString()}px`);
}
