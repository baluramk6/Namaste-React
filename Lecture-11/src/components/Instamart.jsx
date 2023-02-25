import { useState } from "react";

const Section = ({ header, content, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-2 border border-black">
      <h1
        onClick={() => setIsVisible()}
        className="font-bold text-lg cursor-pointer"
      >
        {header}
      </h1>
      {isVisible ? <p>{content}</p> : "V"}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1 className="p-2 m-2 font-bold text-2xl">Instamart Page</h1>

      <Section
        header="About"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime omnis earum commodi! Dolorum nulla voluptatibus voluptas dolor obcaecati dicta aliquid vitae perferendis tenetur. Quae facilis nesciunt, ipsum autem suscipit similique ut cupiditate sint nihil atque praesentium voluptates pariatur perferendis repellat vero. Esse sint ut impedit tempore ab ea illum sapiente?"
        isVisible={isVisible === "about"}
        setIsVisible={() => setIsVisible(isVisible ? false : "about")}
      />
      <Section
        header="Company"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime omnis earum commodi! Dolorum nulla voluptatibus voluptas dolor obcaecati dicta aliquid vitae perferendis tenetur. Quae facilis nesciunt, ipsum autem suscipit similique ut cupiditate sint nihil atque praesentium voluptates pariatur perferendis repellat vero. Esse sint ut impedit tempore ab ea illum sapiente?"
        isVisible={isVisible === "company"}
        setIsVisible={() => setIsVisible(isVisible ? false : "company")}
      />
      <Section
        header="Career"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime omnis earum commodi! Dolorum nulla voluptatibus voluptas dolor obcaecati dicta aliquid vitae perferendis tenetur. Quae facilis nesciunt, ipsum autem suscipit similique ut cupiditate sint nihil atque praesentium voluptates pariatur perferendis repellat vero. Esse sint ut impedit tempore ab ea illum sapiente?"
        isVisible={isVisible === "career"}
        setIsVisible={() => setIsVisible(isVisible ? false : "career")}
      />
    </div>
  );
};

export default Instamart;
