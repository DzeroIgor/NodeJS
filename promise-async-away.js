// Funcție care returnează o promisiune

function myPromiseFunction(parameter) {
    return new Promise((resolve, reject) => {
        // Simulăm o operație asincronă care se poate încheia cu succes sau eșec
        setTimeout(() => {
            if (parameter === true) {
                // Rezolvăm promisiunea cu succes
                resolve("Success!");
            } else {
                // Rejectăm promisiunea cu un mesaj de eroare
                reject(new Error("Something went wrong!"));
            }
        }, 2000); // Simulăm o întârziere de 2 secunde
    });
}

// Apelăm funcția care returnează o promisiune
myPromiseFunction(true)
    .then((result) => {
        // Se execută când promisiunea este rezolvată cu succes
        console.log("Promise resolved:", result);
    })
    .catch((error) => {
        // Se execută când promisiunea este respinsă
        console.error("Promise rejected:", error.message);
    });






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
