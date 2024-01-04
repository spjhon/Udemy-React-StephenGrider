import Button from "../components/Button";

function ButtonPage() {

  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <>
      <Button primary="true" outline="true" onClick={handleClick}>
        Boton001
      </Button>

      <Button secondary="true" rounded="true">
        Boton002
      </Button>

      <Button primary="true">Boton003</Button>
      
      <Button warning="true" outline="true">
        Boton004
      </Button>

      <Button danger="true" rounded="true">
        Boton004
      </Button>

      <Button primary="true" outline="true">
        Boton001
      </Button>
    </>
  );
}

export default ButtonPage;
