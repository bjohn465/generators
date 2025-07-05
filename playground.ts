function* render(renderer: () => Generator) {
	while (true) {
		yield* renderer()
	}
}

export function* MyComponent() {
	let count = 0
	yield* render(function* () {
		yield count
		count++
	})
}
