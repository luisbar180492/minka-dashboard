export const mapActions = ({ entities }) => (

  entities.map((item) => (
    {
      id: item.id,
      description: item.labels.description || 'no hay descripcción',
    }
  ))
);

export const mapAccounts = (accounts) => (

  accounts.map((item) => (
    {
      id: item.id,
      name: item.labels.name || 'no hay nombre',
    }
  ))
);
