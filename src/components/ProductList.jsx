import PropTypes from "prop-types";

const ProductList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "หูฟังเล่นเกมส์",
      price: 300,
      stock: 3,
      image:
        "https://media.komchadluek.net/media/img/size1/2019/10/26/hafcb8jdk7fb8ahf9fhh7.jpg?x-image-process=style/lg-webp",
    },
    {
      id: 2,
      name: "ปลาหมึก",
      price: 9,
      stock: 100,
      image:
        "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=85/public/media/catalog/product/80/88/8858887752480/8858887752480_1-20231009100312-.jpg",
    },
    {
      id: 3,
      name: "มือถือ",
      price: 9000,
      stock: 0,
      image:
        "https://f.ptcdn.info/869/080/000/rw76ul1yvppBxKbtNhTMb-o.jpg",
    },
    {
      id: 4,
      name: "รองเท้าแตะ",
      price: 100,
      stock: 7,
      image:
        "https://www.arirunningstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/r/ari_slide_sandals_-_black_white_black_afw0002-01__01.jpg",
    },
    {
      id: 5,
      name: "เสื้อ",
      price: 50,
      stock: 51,
      image:
        "https://www.dailynews.co.th/wp-content/uploads/2024/07/452218702_7855255521259751_8341298618594475997_n.jpg",
    },
    {
      id: 6,
      name: "หมูแดง",
      price: 30,
      stock: 23,
      image:
        "https://img.kapook.com/u/2017/surauch/cooking/w1_3.jpg",
    },
    {
      id: 7,
      name: "ทอง",
      price: 45000,
      stock: 30,
      image:
        "https://storage.thaipost.net/main/uploads/photos/big/20190626/image_big_5d1269b3b7e5e.jpg"
    },
    {
      id: 8,
      name: "ฉลาม",
      price: 20000,
      stock: 3,
      image:
        "https://www.seub.or.th/seubweb/wp-content/uploads/2024/01/%E0%B8%89%E0%B8%A5%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg",
    },
    {
      id: 9,
      name: "มีด",
      price: 60,
      stock: 0,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 10,
      name: "ไดโนเสาร์",
      price: 200000000,
      stock: 3,
      image:
        "https://www.prachachat.net/wp-content/uploads/2022/06/SCIENCE-DINOSAUR2.jpg",
    },
    {
      id: 11,
      name: "รถหรู",
      price: 1000000000,
      stock: 1,
      image:
        "https://www.hyundai.com/content/dam/hyundai/th/en/images/find-a-car/pip/elantra-n/ELANTRA-N_Lineup_265x144px_t.png",
    },
    {
      id: 12,
      name: "เมาส์",
      price: 1000,
      stock: 4,
      image:
        "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/43/88/8858621001843/8858621001843_1-20230623171607-.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border border-red-600 w-[1300px] items-center justify-center gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 w-full lex flex-col">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-2"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>Price: {product.price} THB</p>
          <p>Stock: {product.stock > 0 ? product.stock : "Out of stock"}</p>
          <button
            onClick={() => addToCart(product)}
            className={`px-4 py-2 rounded text-white mt-auto w-1/2 md:w-full ${
              product.stock > 0
                ? "bg-orange-500"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
