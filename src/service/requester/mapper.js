export const mapActions = ({ entities }) => (

  entities.map((item) => (
    {
      id: item.id,
      description: item.labels.description || 'no hay descripcción',
    }
  ))
);
