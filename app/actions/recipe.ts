'use server';

export async function getRecipeById(id: number) {
  try {
    const response = await fetch(`http://localhost:3001/recipes?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || 'Failed fetching recipe from API',
      };
    }

    console.log(`response::::: ${JSON.stringify(response.body)}`);

    return { success: true, recipe: response.body };
  } catch (error) {
    console.error('Failed fetching recipe from API:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
