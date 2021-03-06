import { ProductCard,ProductButtons,ProductImage, ProductTitle} from "../components"


const product = {
    id:"1",
    title:"Coffe muug - card",
    img:"./coffee-mug.png"
}


export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shoping Store</h1>
        <hr />

        <div 
            style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap"
            }}
        >
            <ProductCard product={product} >
                <ProductCard.Image />
                <ProductCard.Title title="" />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={product} >
                <ProductImage />
                <ProductTitle title="Hola" />
                <ProductButtons />
            </ProductCard>
        </div>
        
    </div>
  )
}
