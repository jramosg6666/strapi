module.exports = {
      routes: [
		{
          method: "GET",
          path: "/jwel/findByClient/:client",
          handler: "posts-report.findJwelByClient",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jwel/findByVendedor/:vendedor",
          handler: "posts-report.findJwelByVendedor",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jwel/findByUser/:id",
          handler: "posts-report.findJwelByUser",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jwel/findByCode/:code/:disponibilidad",
          handler: "posts-report.findJwelByCode",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jwel/findByModel/:model",
          handler: "posts-report.findJwelByModel",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
        
        {
          method: "GET",
          path: "/jewlCatalogue/findByCode/:code",
          handler: "posts-report.findJewlCatalogueByCode",
          config: {
            policies: [],
            middlewares: [],
          },

        },
           {
          method: "GET",
          path: "/jewlCatalogue/findByModel/:model",
          handler: "posts-report.findJewlCatalogueByModel",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
        
        {
          method: "GET",
          path: "/user/findByRol/:rol",
          handler: "posts-report.findUserByRol",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
        {
          method: "GET",
          path: "/user/findByPhone/:phone",
          handler: "posts-report.findUserByPhone",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },      
{
          method: "GET",
          path: "/user/findVendedorByAgeBySexoByCantVentas/:age/:genre/:count_jewl",
          handler: "posts-report.findVendedorByAgeBySexoByCantVentas",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        /*{
          method: "GET",
          path: "/user/findBySexo/:genre",
          handler: "posts-report.findUserBySexo",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        {
          method: "GET",
          path: "/user/findByCantVentas/:count_jewl",
          handler: "posts-report.findUserByCantVentas",
          config: {
            policies: [],
            middlewares: [],
        },          
        },*/
        {
          method: "GET",
          path: "/user/findByUserName/:username",
          handler: "posts-report.findUserByUserName",
          config: {
            policies: [],
            middlewares: [],
        },          
        },

      ],
    };