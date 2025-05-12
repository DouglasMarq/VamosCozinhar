'use client';

import { Divider } from 'antd';
import Card from '@/app/components/cardsWithLoadingAndImages';
import Meta from 'antd/es/card/Meta';
import useCardLoading from '@/app/components/cardsWithLoadingAndImages/hooks/useCardLoading';
import Image from 'next/image';
import arrozImage from '@/public/images/arrozBranco.png';
import { redirect } from 'next/navigation';

export default function Home() {
  const { isLoading, setIsLoading } = useCardLoading();

  function redirectToPage(id: number) {
    redirect(`receitas/${id}`);
  }

  return (
    <div className="p-4 min-h-screen flex flex-col">
      <div>
        <Divider orientation="left">
          <h2>Receitas 1 Estrela</h2>
        </Divider>
        <div className="flex gap-2">
          <div className="w-5/6">
            <Card
              action={() => {
                redirectToPage(1);
              }}
              loading={isLoading}
              cover={<Image alt="example" src={arrozImage} />}
            >
              <Meta
                title="Arroz"
                description="Delicioso arroz branco com cebola e pimenta do reino"
              />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
          <div className="w-5/6">
            <Card>
              <Meta title="Arroz" description="Delicioso arroz com xpto" />
            </Card>
          </div>
        </div>
      </div>
      <div>
        <Divider orientation="left">
          <h2>Receitas 2 Estrelas</h2>
        </Divider>
      </div>
      <div>
        <Divider orientation="left">
          <h2>Receitas 3 Estrelas</h2>
        </Divider>
      </div>
      <div>
        <Divider orientation="left">
          <h2>Receitas 4 Estrelas</h2>
        </Divider>
      </div>
      <div>
        <Divider orientation="left">
          <h2>Receitas 5 Estrelas</h2>
        </Divider>
      </div>
    </div>
  );
}
