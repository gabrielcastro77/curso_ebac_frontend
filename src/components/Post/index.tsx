import PostComments from '../PostComments';
import { ReactNode } from 'react';
import { ContainerPost, ImagemPost, ParagrafoPost } from './styles';

export type Props = {
    children?: ReactNode;
    
}

const Post = ({ children }: Props) => (
    <ContainerPost>
        <ImagemPost src="https://static3.tcdn.com.br/img/img_prod/460977/batmovel_batmobile_batman_1989_escala_1_6_mms170_hot_toys_cg_12779_1_20201211160638.png" />
        <ParagrafoPost> {children} </ParagrafoPost>
        <PostComments />
    </ContainerPost>
);

export default Post;