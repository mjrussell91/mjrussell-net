import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageProjects } from "./page-projects";

describe("PageProjects", () => {
	let component: PageProjects;
	let fixture: ComponentFixture<PageProjects>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PageProjects],
		}).compileComponents();

		fixture = TestBed.createComponent(PageProjects);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
