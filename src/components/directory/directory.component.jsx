import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'
// import categories from "../../data/categoriesData";



// const categories = 
//   [
//     {
//       "id": 1,
//       "title": "hats",
//       "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
//     },
//     {
//       "id": 2,
//       "title": "jackets",
//       "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
//     },
//     {
//       "id": 3,
//       "title": "sneakers",
//       "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
//     },
//     {
//       "id": 4,
//       "title": "womens",
//       "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
//     },
//     {
//       "id": 5,
//       "title": "mens",
//       "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//     }
//   ]
  









const Directory = ({categories}) => {
    //const {id, imageUrl, title} = categories;
    console.log(categories);

    return (
        <div className="directory-container">
        {categories.map((category) => (
        
        <CategoryItem key={category.id} category={category}/>
        ))}
      
      </div>

    )



}

export default Directory