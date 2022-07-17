import './app-filter.css';


const AppFilter = (props) => {

    const buttonsData = [
      { name: "all", label: "Все сотрудники" },
      { name: "rise", label: "На повышение" },
      { name: "morethen1000", label: "З/П больше 1000$" },
      { name: "liked", label: "Премию получат" },
    ];

    const buttons = buttonsData.map(({name, label}) => {
      const active = props.filter === name;
      const clazz = active ? "btn btn-light" : "btn btn-outline-light";
      return (
        <button className={clazz} type="button" key={name} onClick={() => props.onFilterSelect(name)}>
          {label}
        </button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
}

export default AppFilter;