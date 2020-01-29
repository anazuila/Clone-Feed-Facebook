import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Person 1',
          avatar: 'https://image.flaticon.com/icons/svg/168/168734.svg',
        },
        date: '28 Jan 2020',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '28 Jan 2020',
            content: 
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Person 2',
          avatar: 'https://image.flaticon.com/icons/svg/236/236832.svg'
        },
        date: '28 Jan 2020',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
         { 
           id: 4,
            author: {
            name: 'Person 3',
            avatar: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            },
            date: '28 Jan 2020',
            content:
            'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Person 4',
              avatar: 'https://image.flaticon.com/icons/svg/201/201634.svg'
            },
            date: '28 Jan 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Person 2',
          avatar: 'https://image.flaticon.com/icons/svg/236/236832.svg'
        },
        date: '28 Jan 2020',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
         { 
           id: 7,
            author: {
            name: 'Person 3',
            avatar: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            },
            date: '28 Jan 2020',
            content:
            'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 8,
            author: {
              name: 'Person 4',
              avatar: 'https://image.flaticon.com/icons/svg/201/201634.svg'
            },
            date: '28 Jan 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;