const productos = [
    {
      id: "A1B1",
      nombre: "Rainbow Six",
      descripcion: "Juego de disparos",
      precio: 50,
      categoria: "Shooter",
      stock: 10,
      imagen: "https://www.geekgeneration.fr/wp-content/uploads/2021/02/Tom-Clancys-Rainbow-Six-Siege-1068x601.jpg",
      
    },
    {
      id: "A2B2",
      nombre: "Cs Go 2",
      descripcion: "Juego de disparos",
      precio: 60,
      categoria: "Shooter",
      stock: 10,
      imagen: "https://files.bo3.gg/uploads/news/9099/title_image/960x480-1e5cc4703e97abe18753513ecfff2484.webp",
      
    },
    {
      id: "B1C1",
      nombre: "Legend of Zelda",
      descripcion: "Juego de Aventuras",
      precio: 55,
      categoria: "Aventura",
      stock: 12,
      imagen: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild.jpg",
      
    },
    {
      id: "B2C2",
      nombre: "Elden Ring",
      descripcion: "Juego de Aventuras",
      precio: 70,
      categoria: "Aventura",
      stock: 25,
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202402/2214/fe6de6126062e4d38dd6c4cef9ba1966ee2440a43429dc98.jpg",
      
    },
    {
      id: "D3E3",
      nombre: "Mario Party",
      descripcion: "Juego-de-mesa",
      precio: 60,
      categoria: "Juego-de-mesa",
      stock: 15,
      imagen: "https://marioparty.nintendo.com/assets/images/share-fb.jpg",
      
    },
    {
      id: "D4E4",
      nombre: "Monopoly",
      descripcion: "Juego-de-mesa",
      precio: 30,
      categoria: "Juego-de-mesa",
      stock: 8,
      imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d1e0cf23390181.56047eebbd3c9.jpg",
      
    }
  ]


  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout ( ()=> {
        resolve (productos)
      }, 2000);
    });
  };


  export default obtenerProductos