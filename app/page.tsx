'use client';

import { Divider, Image } from 'antd';
import Card from '@/app/components/cardsWithLoadingAndImages';
import Meta from 'antd/es/card/Meta';
import useCardLoading from '@/app/components/cardsWithLoadingAndImages/hooks/useCardLoading';

export default function Home() {
  const { isLoading, setIsLoading } = useCardLoading();

  return (
    <div className="p-4 min-h-screen flex flex-col">
      <div>
        <Divider orientation="left">
          <h2>Receitas 1 Estrela</h2>
        </Divider>
        <div className="flex gap-2">
          <div className="w-5/6">
            <Card
              loading={isLoading}
              cover={
                <Image
                  alt="example"
                  src="https://static.itdg.com.br/images/360-240/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg"
                  preview={false}
                />
              }
            >
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
