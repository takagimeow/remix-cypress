describe("share", () => {
	it("should allow a user to connect their discord account", () => {
		cy.visit("/");
		cy.get("h1").contains("Welcome to Remix");
		// cy.get("p").contains("こんにちわ");
	});
});
