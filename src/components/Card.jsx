import { Link } from "react-router-dom";

function Card(props) {
  const { data } = props;
  //console.log(data);

  return (
    <Link
      to={`/products/${data.id}`}
      className="border border-gray-400 group overflow-hidden"
    >
      <figure className="p-2 h-[260px] lg:h-[260px]">
        <img
          src={data.image}
          alt=""
          className="w-[100]  h-full object-cover group-hover:scale-110 transition-all cursor-pointer"
        />
      </figure>

      <div className="p-2">
        <h3 className="line-clamp-1">{data.title}</h3>

        <p className="text-red-600">${data.price}</p>
      </div>
    </Link>
  );
}

export default Card;
