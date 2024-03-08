// Funcție care returnează o promisiune rezolvată după o întârziere
function resolveAfterDelay(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promise resolved after " + delay + " milliseconds");
        }, delay);
    });
}

// Funcție asincronă care folosește await pentru a aștepta rezolvarea unei promisiuni
async function asyncFunction() {
    try {
        console.log("Before await");
        const result1 = await resolveAfterDelay(2000); // Așteaptă rezolvarea acestei promisiuni
        console.log(result1);
        
        console.log("Between awaits");
        const result2 = await resolveAfterDelay(1000); // Așteaptă rezolvarea acestei promisiuni
        console.log(result2);

        console.log("After await");
    } catch (error) {
        console.error("Error:", error);
    }
}

// Apelarea funcției asincrone
asyncFunction();
