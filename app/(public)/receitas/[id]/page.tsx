'use client';

import { useParams } from 'next/navigation';
import { Avatar, Divider, List, Image } from 'antd';
import { useEffect, useState } from 'react';

interface Ingredient {
  ingredient: string;
  description: string;
  image: string;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  difficulty: number;
  image?: string;
  ingredients: Ingredient[];
  prepare: string[];
  createdAt: string;
  updatedAt: string;
}

export default function Recipes() {
  const params = useParams();
  const id = params.id;
  const [recipeData, setRecipeData] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3001/recipes/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log('Fetched data:', data);
        setRecipeData(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="pr-16 pl-16 min-h-screen flex flex-col">
      <div>
        <Divider orientation="center" style={{ fontSize: '36px' }}>
          {recipeData?.name}
        </Divider>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Image
          className="w-[25%] h-[25%]"
          alt="Arroz"
          src={recipeData?.image}
          preview={false}
        />
      </div>
      <div className="flex flex-col pt-5">
        <p>{recipeData?.description}</p>
      </div>
      <div>
        <Divider orientation="left" style={{ fontSize: '24px' }}>
          Ingredientes
        </Divider>
      </div>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={recipeData?.ingredients}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<p>{item.ingredient}</p>}
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
          dataSource={recipeData?.prepare}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
}
