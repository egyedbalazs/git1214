const orders = [
    {   
        id: 1,
        pizza: "Magyaros",
        extra: "Bacon",
        ital: "Heineken 0.5L",
        ar: 2000,
        kep: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg"
    },

    {
        id: 2,
        pizza: "Pizza Olivo",
        extra: "Sajt",
        ital: "Fanta Narancs",
        ar: 1800,
        kep: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 3,
        pizza: "Pizza Kemence",
        extra: "Szárított paradicsom",
        ital: "Limonádé",
        ar: 2500,
        kep: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 4,
        pizza: "Szalámis Pizza",
        extra: "Füstölt Sajt",
        ital: "Pepsi Zero",
        ar: 2800,
        kep: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 5,
        pizza: "Margaréta Pizza",
        extra: "San Marzano Paradicsom",
        ital: "Alkoholmentes koktél",
        ar: 2100,
        kep: "https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 6,
        pizza: "Négyszögletű Pizza",
        extra: "Friss Bazaslikom",
        ital: "Narancslé",
        ar: 3500,
        kep: "https://images.pexels.com/photos/162744/tomatoes-tomato-quiche-red-yellow-162744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

const result = document.getElementById("result");

let output = "";

            orders.map((pizza)=>{

                output += `
                    <div class="order">

                    <div>
                        <img src="${pizza.kep}" alt="${pizza.pizza}">
                    </div>

                    <h3>${pizza.pizza}</h3>
                    <hr>
                    <h4>Ár: ${pizza.ar}</h4>
                    <p>Extra: ${pizza.extra}</p>
                    <p>Ital: ${pizza.ital}<p>

                    </div>
                `;
            })

            result.innerHTML = output;
