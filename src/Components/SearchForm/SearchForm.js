export default function SearchForm({ onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit} name="search">
        <input
          type="text"
          name="serch"
          placeholder="Введите название фильма"
          title="Ведите название фильма"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
