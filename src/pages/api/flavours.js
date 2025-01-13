export default function handler(req, res) {
    const Flavour = [
        {
        id: 1,
        name: "Popsicle Ice-creams",
        price: 3.99,
        image: "https://img.freepik.com/free-photo/delicious-ice-cream-arrangement-top-view_23-2150735484.jpg",
        },

        {
            id: 2,
            name: "Fruity Delights",
            price: 4.99,
            image: "https://png.pngtree.com/background/20230528/original/pngtree-the-best-ice-cream-flavors-for-men-picture-image_2782951.jpg",
            },

            {
                id: 3,
                name: "Chocolate Ice creams",
                price: 4.99,
                image: "https://media.istockphoto.com/id/1318351574/photo/chocolate-ice-cream-scoop-ball-waffle-cone-chocolates-and-mint-leaf-and-toppings.jpg?s=612x612&w=0&k=20&c=XDn_gu__4UeJZobngfUWzagYThobp3dUSAKaMZapYPY=",
                },

                {
                    id: 4,
                    name: "Matacha Delights",
                    price: 4.99,
                    image: "https://t3.ftcdn.net/jpg/08/83/38/30/360_F_883383072_NiYEFbloC9bvI7Afvf9Jkhx3q8SoGw7m.jpg",
                    },

                    {
                        id: 5,
                        name: "Red velvet",
                        price: 4.99,
                        image: "https://images.squarespace-cdn.com/content/v1/5a5d25beaeb625fd17a1d4a9/1695865988996-ZKTR755K6PXUYHYQ5N2Z/SerendipityIceCream_WaffleBowl_1000x667.jpg",
                        },

                        {
                            id: 6,
                            name: "Bubblegum Ice-creams",
                            price: 4.99,
                            image: "https://t3.ftcdn.net/jpg/08/99/33/84/360_F_899338458_vvodk5ozJRU9L5dKEv871qE93zn0b0Kx.jpg",
                            },
    ];

    res.status(200).json(Flavour);
}