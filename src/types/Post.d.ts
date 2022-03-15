import * as prismicT from '@prismicio/types';

export type PostData = {
  titulo: prismicT.TitleField;
  subtitulo: prismicT.TitleField;
  imagem: prismicT.ImageField;
  conteudo: prismicT.RichTextField;
  tituloMeta: prismicT.KeyTextField;
  descricaoMeta: prismicT.KeyTextField;
  imagemMeta: prismicT.ImageField;
};

export type PrismicPostPage = prismicT.PrismicDocument<PostData>;

export interface IPostProps {
  pageContent: PostData;
}
