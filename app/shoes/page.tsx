import { getAllShoes } from "@/api/getAllShoes";
import { ShoeCard } from "@/components/ui/shoe-card";

const ShoePage=async()=>{
    const data = await getAllShoes();

    console.log(data)

    return (
        <div className="container">
            <div className="grid lg:grid-cols-3 md:mt-10 sm:grid-cols-2  gap-4">
        {data?.map((shoe) => (
          <ShoeCard key={shoe.id} image={shoe.img} shoe={shoe} />
        ))}
      </div>
        </div>
    )
}

export default ShoePage