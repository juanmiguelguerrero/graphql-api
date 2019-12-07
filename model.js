module.exports = {
    "id": "298ss8rt43",
    "createDate": "08/02/2017 10:10",
    "name": "Proyecto de test",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    "uri": "https://www.api.com/298ss8rt43",
    "collections": [
        {
            "id": "Book",
            "name": "Libros",
            "descripcion": "Libros lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "uri": "https://www.api.com/298ss8rt43/nameCollecction",
            "properties": [
                {
                    "name": "title",
                    "label": "Titulo del libro",
                    "description": "Escribe el nombre del libro",
                    "type": "String", 
                    "component": "string",
                    "required": true,
                    "unique": false,
                    "index": false,
                    "validation": {},
                    "lenght": "",
                    "default": "",
                    "id": true
                },
                {
                    "name": "author",
                    "label": "Autor del libro",
                    "description": "Nombre del autor",
                    "type": "String", 
                    "component": "string",
                    "required": true,
                    "unique": false,
                    "index": false,
                    "validation": {},
                    "lenght": "",
                    "default": "",
                    "id": true
                },
                {
                    "name": "price",
                    "label": "Precio del libro",
                    "description": "Precio",
                    "type": "Float", 
                    "component": "Number",
                    "required": false,
                    "unique": false,
                    "index": false,
                    "validation": {},
                    "lenght": "",
                    "default": "",
                    "id": true
                },
				
            ]
        },
		{
            "id": "Author",
            "name": "Autor",
            "descripcion": "Libros lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "uri": "https://www.api.com/298ss8rt43/nameCollecction",
            "properties": [
                {
                    "name": "name",
                    "label": "Nombre del autor",
                    "description": "Escribe el nombre del autor",
                    "type": "String", 
                    "component": "string",
                    "required": true,
                    "unique": false,
                    "index": false,
                    "validation": {},
                    "lenght": "",
                    "default": "",
                    "id": true
                },
                {
                    "name": "age",
                    "label": "Edad del libro",
                    "description": "Edad del autor",
                    "type": "Int", 
                    "component": "number",
                    "required": true,
                    "unique": false,
                    "index": false,
                    "validation": {},
                    "lenght": "",
                    "default": "",
                    "id": true
                }				
            ]
        }		
    ]
}