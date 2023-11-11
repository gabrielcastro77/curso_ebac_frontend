import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';
import { AreaDeTextoPost2, BotaoPost2, ContainerPost2, FormularioPost2, Item, ListaPost2, ParagrafoPost2 } from './styles';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <ContainerPost2>
            <ListaPost2>
                {comments.map(({ comment, id }) => (
                    <Item className={styles['post-comment']} key={id}>
                        <ParagrafoPost2 className={styles['post-comment-content']}>
                            {comment}
                        </ParagrafoPost2>
                    </Item>
                ))}
            </ListaPost2>
            <FormularioPost2 onSubmit={handleAddComment}>
                <AreaDeTextoPost2 value={tempComment} onChange={e => setTempComment(e.target.value)} required />
                <BotaoPost2 type="submit">
                    Comentar
                </BotaoPost2>
            </FormularioPost2>
        </ContainerPost2>
    );
}

export default Post;