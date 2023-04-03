import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, setFun }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black mx-2 my-2 p-2">
      <h1 className="text-xl font-bold">{title}</h1>
      {isVisible ? (
        <button className="cursor-pointer underline" onClick={() => setFun()}>
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible()}>
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <h1 className="text-4xl font-bold ">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
        setFun={() => setVisibleSection("")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
        setFun={() => setVisibleSection("")}
      />
      <Section
        title={"Careers"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
        setFun={() => setVisibleSection("")}
      />
    </>
  );
};

export default InstaMart;
