import PageWrapper from "../components/PageWrapper";

const Portfolio = () => {
  return (
    <PageWrapper>
      <h1 className="text-4xl text-gold font-bold mb-8">Portfolio</h1>

      <div
        className="
        bg-card
        rounded-3xl
        p-8
        border border-gold/20
      "
      >
        Portfolio Table Here
      </div>
    </PageWrapper>
  );
};

export default Portfolio;
