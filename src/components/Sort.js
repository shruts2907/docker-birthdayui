import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchList"
              type="text"
              className="form-control"
              aria-label="Search List"
              onChange={e => this.props.searchApts(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn sort-btn-css dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.objOrder === "first" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder("name", this.props.orderDir, "first")
                  }
                  href="#"
                >
                  First Name
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.objOrder === "last" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder("name", this.props.orderDir, "last")
                  }
                  href="#"
                >
                  Last Name
                </button>
                {/*<button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "dateOfBirth" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder("dateOfBirth", this.props.orderDir)
                  }
                  href="#"
                >
                  Date of Birth
                </button>*/}
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "country" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder("country", this.props.orderDir)
                  }
                  href="#"
                >
                  Country
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "asc" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder(
                      this.props.orderBy,
                      "asc",
                      this.props.objOrder
                    )
                  }
                  href="#"
                >
                  Asc
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "desc" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder(
                      this.props.orderBy,
                      "desc",
                      this.props.objOrder
                    )
                  }
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
