const checkIfSimilarObj = (objA, objB) => {
	let isTrue = true;
	let keysInA = [];
	let keysInB = [];
	for (const [keyA, _] of Object.entries(objA)) {
		keysInA.push(keyA);
	}
	for (const [keyB, _] of Object.entries(objB)) {
		keysInB.push(keyB);
	}

	console.log(keysInA);

	for (let i = 0; i < keysInA.length; i++) {
		if (keysInA[i] !== keysInB[i]) {
			isTrue = false;
		}
	}

	for (let i = 0; i < keysInB.length; i++) {
		if (keysInA[i] !== keysInB[i]) {
			isTrue = false;
		}
	}

	return isTrue;
};

const objA = {
	a: "c",
	b: "3",
};

const objB = {
	a: "s",
	b: "3",
};

console.log(checkIfSimilarObj(objA, objB));
console.log(SimilarObj);