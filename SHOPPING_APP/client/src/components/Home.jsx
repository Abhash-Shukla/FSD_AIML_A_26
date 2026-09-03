import Item from "./Item"
const Home = () => {
    const itemdata=[
        {image:"" ,title:"ReactJS",price:465},
        {image:"" ,title:"NodeJS",price:465},
        {image:"" ,title:"ExpressJS",price:465}

    ];
  return (
    <div className="home">
      {
        itemdata.map((item,index)=>{
            return <Item key={item} props={item}/>
        })
      }
    </div>
  )
}

export default Home
