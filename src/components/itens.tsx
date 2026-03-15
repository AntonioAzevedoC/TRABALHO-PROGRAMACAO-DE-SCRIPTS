interface ItemInterface {
  nome: string;
  preco: string;
  estoque: boolean;
  url: string;
}

const Item = function ({ nome, preco, estoque, url }: ItemInterface) {
  return (
    <>
      <div
        className={`__item-produto ${estoque ? " __em-estoque" : " __faltando"}`}
      >
        <img src={url} alt="Imagem não encontrada"></img>
        <div>
          <h4>{nome}</h4>
          {!estoque ? (
            <p className="__texto-fora-estoque">Fora de Estoque</p>
          ) : null}
          <h4>{preco}</h4>
        </div>
      </div>
    </>
  );
};

export default Item;
