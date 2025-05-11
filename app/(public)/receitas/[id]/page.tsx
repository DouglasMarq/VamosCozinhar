'use client';

import { useParams } from 'next/navigation';
import { Avatar, Divider, List } from 'antd';
import Image from 'next/image';
import arrozImage from '@/public/images/arrozBranco.png';

const data = [
  {
    title: 'Arroz Branco',
    description:
      'Uma pessoa geralmente consome de 100ml (meia xícara) a 200ml (uma xícara) de arroz. Aumente se o apetite for grande.',
  },
  {
    title: 'Azeite',
    description: '7ml a 8ml de azeite para cada 100ml (meia xícara) de arroz.',
  },
  {
    title: 'Alho',
    description:
      '1 dente pequeno de alho ou 1/2 dente médio a grande de alho para cada 100ml (1 xícara) de arroz.',
  },
  {
    title: 'Sal',
    description:
      '1/4 a 1/2 colher de chá rasa de sal (cerca de 1 a 2 g), dependendo do seu gosto e se vai acompanhar algo já salgado.',
  },
  {
    title: 'Pimenta do Reino',
    description:
      '1 pitada (cerca de 1/8 de colher de chá), ou moída na hora direto sobre o arroz — o equivalente a 1 ou 2 voltas no moedor.',
  },
  {
    title: 'Cebola',
    description: '1 a 2 colheres de sopa (cerca de 15g a 30g) de cebola picada',
  },
  {
    title: 'Água',
    description:
      'Adicione 200ml (2 xícaras) de água para cada 100ml (meia xícara) de arroz, ou seja, o dobro de água para cada 100ml (meia xícara) de arroz.',
  },
];

const dataPreparo = [
  '1. Aqueça o azeite em fogo médio.',
  '2. Adicione a cebola picada e refogue por 1 a 2 minutos, até começar a ficar translúcida.',
  '3. Acrescente o alho e refogue por mais 30 segundos.',
  '4. Coloque o arroz e misture bem para envolver nos temperos por 1 minutinho.',
  '5. Adicione o sal, a pimenta-do-reino e a água.',
  '6. Aumente o fogo até ferver, depois abaixe, tampe parcialmente e cozinhe até a água secar (cerca de 12–15 minutos para 100ml-300ml de arroz. Cerca de 15 a 18 minutos para 400ml ou mais).',
  '7. Desligue o fogo, tampe por completo e deixe descansar por 5 minutos antes de servir.',
];

export default function Recipes() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="pr-16 pl-16 min-h-screen flex flex-col">
      <div>
        <Divider orientation="center" style={{ fontSize: '36px' }}>
          Arroz
        </Divider>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Image
          className="w-[50%] h-[50%]"
          width={1920}
          height={1080}
          alt="Arroz"
          src={arrozImage}
          priority
        />
      </div>
      <div className="flex flex-col pt-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis enim
          nisl. Curabitur neque sapien, ultrices at nibh sit amet, pulvinar
          egestas neque. Praesent imperdiet arcu in nulla rhoncus, sit amet
          gravida justo semper. Suspendisse eros metus, fermentum luctus enim a,
          posuere venenatis sapien. Aenean mollis sed tellus id lobortis. Nulla
          accumsan massa sapien, sed interdum ex consectetur ut. Nunc efficitur
          dictum neque. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Cras mollis, mi ac facilisis
          ullamcorper, velit arcu blandit mauris, convallis fringilla mi enim
          eget enim. Donec pulvinar non mauris et dignissim. Curabitur lobortis
          magna sit amet dolor rhoncus, id porttitor felis iaculis. Mauris
          laoreet justo at erat dictum, at eleifend lacus finibus. Morbi ac
          viverra turpis, sed cursus massa. Nulla at orci at risus blandit
          mollis eu et ante. Duis blandit dolor eget posuere vulputate. Proin
          bibendum risus vitae ligula pharetra porttitor. Aliquam erat volutpat.
          Donec quis dolor gravida, malesuada lorem et, vehicula mauris.
          Suspendisse laoreet ex nec rhoncus tempor. Etiam sed ullamcorper diam.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. In tincidunt pharetra orci, eu pharetra nulla
          dapibus vitae. Nam quis turpis sed justo vestibulum placerat.
        </p>
      </div>
      <div>
        <Divider orientation="left" style={{ fontSize: '24px' }}>
          Ingredientes
        </Divider>
      </div>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
      <div>
        <Divider orientation="left" style={{ fontSize: '24px' }}>
          Como Preparar
        </Divider>
      </div>
      <div>
        <List
          bordered
          dataSource={dataPreparo}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>Recipe Details</h3>
      <p>Recipe ID: {id}</p>
    </div>
  );
}
