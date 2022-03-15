import * as prismicT from '@prismicio/types';

type BlogData = {
  postsDestaque: prismicT.PrismicDocument<{
    titulo: prismicT.TitleField;
    conteudo: prismicT.RichTextField;
    imagem: prismicT.ImageField;
  }>[];
  tituloMeta: prismicT.KeyTextField;
  descricaoMeta: prismicT.KeyTextField;
  imagemMeta: prismicT.ImageField;
};

export type PrismicBlogPage = prismicT.PrismicDocument<BlogData>;

export interface IBlogProps {
  pageContent: BlogData;
}
