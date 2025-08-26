const productsData=[
  {
    "_id": "1",
    "name": "Red Roses Bouquet",
    "description": "A classic bouquet of fresh red roses, perfect for romantic occasions.",
    "category": "Bouquet",
    "size": "Medium",
    "color": "Red",
    "material": "Fresh Flowers",
    "price": 29.99,
    "stock": 25,
    "images": [
      "data:image/jpeg;base64,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"
    ],
    "ratings": [
      { "userId": "Mona", "rating": 5, "comment": "Beautiful and fresh!" },
      { "userId": "Hossam", "rating": 4, "comment": "Arrived on time." }
    ],
    "createdAt": "2025-08-01T10:00:00Z",
    "updatedAt": "2025-08-20T15:30:00Z"
  },
  {
    "_id": "2",
    "name": "Sunflower Bunch",
    "description": "Bright and cheerful sunflowers to brighten anyone’s day.",
    "category": "Bunch",
    "size": "Large",
    "color": "Yellow",
    "material": "Fresh Flowers",
    "price": 19.99,
    "stock": 40,
    "images": [
      "https://example.com/images/sunflowers.jpg"
    ],
    "ratings": [
      { "userId": "Ali", "rating": 4, "comment": "Nice and sunny!" },
      { "userId": "Reem", "rating": 3, "comment": "Could be fresher." }
    ],
    "createdAt": "2025-07-22T09:15:00Z",
    "updatedAt": "2025-08-18T11:00:00Z"
  },
  {
    "_id": "3",
    "name": "White Lily Vase",
    "description": "Elegant white lilies arranged in a glass vase.",
    "category": "Vase Arrangement",
    "size": "Small",
    "color": "White",
    "material": "Fresh Flowers, Glass Vase",
    "price": 24.50,
    "stock": 10,
    "images": [
      "https://example.com/images/white-lily.jpg"
    ],
    "ratings": [
      { "userId": "Nada", "rating": 5, "comment": "Smells amazing!" },
      { "userId": "Tamer", "rating": 4, "comment": "Nice gift idea." }
    ],
    "createdAt": "2025-08-05T13:00:00Z",
    "updatedAt": "2025-08-21T09:45:00Z"
  },
  {
    "_id": "4",
    "name": "Mixed Spring Flowers",
    "description": "A colorful mix of seasonal spring flowers in a hand-tied bouquet.",
    "category": "Bouquet",
    "size": "Large",
    "color": "Mixed",
    "material": "Fresh Flowers",
    "price": 34.99,
    "stock": 18,
    "images": [
      "https://example.com/images/spring-bouquet.jpg"
    ],
    "ratings": [
      { "userId": "Salma", "rating": 5, "comment": "Very vibrant!" },
      { "userId": "Fady", "rating": 3, "comment": "Colors faded a bit fast." }
    ],
    "createdAt": "2025-07-30T16:00:00Z",
    "updatedAt": "2025-08-15T14:20:00Z"
  }
]