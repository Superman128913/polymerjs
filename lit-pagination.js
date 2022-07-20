import { LitElement, html, css } from "lit-element";
// import { Polymerelement} from "polymer";
import '@polymer/paper-button/paper-button';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-iconset-svg';
import '@polymer/polymer/lib/elements/dom-repeat.js'
// import '@poolymer/polymer/lib/elements/dom-repeat'
// import { repeat } from 'https://unpkg.com/lit-html@latest/lib/repeat.js?module';

class LitPagination extends LitElement{

  //  jsonStringConverter = {
  //     toAttribute(val) {
  //         return JSON.parse(val);
  //     },
  //     fromAttribute(str) {
  //         return JSON.stringify(str);
  //     }
  //   }
    static get styles() {
        return css`
        :host {
            display: block;
            font-size: 14px;
          }
          
          div.paginator-page-container {
            display: block;
            @apply --layout-horizontal;
            @apply --layout-center;
            @apply --layout-center-justified;
            @apply --layout-center-center;
          }
    
          :host paper-button {
              margin: 0px 4px;
              padding: 2px 8px;
              /*margin: 0px;*/
              position: relative;
              min-width: 30px;
    
          }
    
          :host paper-button {
              color: var(--primary-text-color);
              background-color: transparent;
              border-radius: 16px;
          }
    
          :host span {
              margin: 0px 4px;
          }
    
          .main-section {
            width: 100%;
          }
      
          table {
            border-collapse: collapse;
            width: 100%;
          }
          
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #DDD;
          }
      
          .main-section {
            width: 100%;
          }
      
          :host([xsmallscreen]) > paper-material {
            flex-basis: 100%;
          }
      
          .tabs {
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            padding-right: 8px;
          }
          
          paper-material {
            overflow: hidden !important;
            background-color: var(--light-theme-background-color);
          }
          .list-item {
            border-bottom: 1px solid #eee;
            padding: 6px 10px;
            min-width: 33%;
          }
          .list-item:last-child {
            border-bottom: 0 none;
            padding-top: 16px;
          }
          .flex {
            @apply --layout-flex;
          }
          .flex3child {
            @apply --layout-flex-3;
          }
          :host(.active) .block {
            transform: translate(0, 0);
            opacity: 1;
            height: 100%;
          }
          table {
            table-layout: fixed;
            width: 100%;
            padding: 0 6px;
            margin: 6px 0;
          }
          table tr {
            border-bottom: 1px solid #eee;
          }
          table td {
            padding: 4px 6px;
          }
          .name,
          .cost {
            font-weight: 500;
          }
          .count {
            color: rgba(0, 0, 0, 0.54);
          }
          td.count {
            font-size: 12px;
            line-height: 22px;
          }
          td.count > iron-icon {
            float: left;
          }
          .text-right {
            text-align: right;
          }
          section-tile {
            position: relative;
          }
          .sub {
            padding: 8px;
            font-size: 0.8em;
            color: var(--app-costs-sub-text-color);
            display: block;
            margin-top: -10px;
          }
          .zero-clouds {
            padding: 0 12px 12px;
            font-size: 0.9em;
            opacity: 0.54;
          }
          .zero-cloud:after {
            position: relative;
            content: ', ';
          }
          .zero-cloud:last-of-type:after {
            position: relative;
            content: '.';
          }
          iron-icon#costdocs {
            width: 20px;
            height: 20px;
            opacity: 0.54;
            float: right;
          }
      
          .allowBtn,.denyBtn {
            transition-duration: 0.4s;
          }
          .allowBtn
          {
            background-color: white; 
            color: black; 
            border: 1px solid #4CAF50;
            cursor: pointer;
          }
          
          .denyBtn {
            background-color: white; 
            color: black; 
            border: 1px solid #f44336;
            cursor: pointer;
          }
      
          .allowBtn:hover {
            background-color: #4CAF50; /* Green */
            color: white;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
          }
      
          .denyBtn:hover {
            background-color: #f44336;
            color: white;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
          }
      
          .buttons {
            // display: flex;
            // flex: 1;
            padding:5px;
          }
          paper-button {
            text-transform: uppercase;
            color: var(--blue-color);
            font-size: 13px;
            padding: 10px;
            margin: 2px;
            font-weight: 400;
          }
          paper-button.active {
            color: rgba(0, 0, 0, 0.54);
          }
          
          #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          
          #customers td, #customers th {
            border: 1px solid #ddd;
            padding: 8px;
          }
          
          #customers tr:nth-child(even){background-color: #f2f2f2;}
          
          #customers tr:hover {background-color: #ddd;}
          
          #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white;
          }`
      } 

      

    static get properties() {
        return {
            sortingDirectionClass: {
                type: String,
              },
              currentlySortedColumnId: {
                type: String
              },
              order: {
                type: Boolean,
              },
              

            /** Per-page limit of the elements. */
            limit: {
                type: Number,
                reflect: true,
                attribute: true
            },
            /** Total count of the elements. */
            total: {
                type: Number,
                reflect: true,
                attribute: true
            },
            /** Current page. */
            page: {
                type: Number,
                reflect: true,
                attribute: true
            },
            /** Count of the pages displayed before or after the current page. */
            size: {
                type: Number,
                reflect: true,
                attribute: true
            },
            /** Number of paginated pages. */
            pages: {
                type: Number
            },
            /** Has pages before the current page. */
            hasBefore: {
                type: Boolean
            },
            /** Has pages after the current page. */
            hasNext: {
                type: Boolean
            },
            /** Has pages. */
            hasPages: {
                type: Boolean
            },
            /** Displayed page elements */
            items: {
                type: Array
            },

            members: {
                // type: Array,
                value() {
                  // let list=this.membersInfo.contents
                  return this.membersInfo.contents
                }
            },
            membersInfo: {
              type: JSON,
              attribute: true
            },
            
            employees: {
              value() {
                return [
                  {first: 'Bob', last: 'Smith'},
                  {first: 'Sally', last: 'Johnson'},
                
                ];
              }
            }
        };
    }

    constructor(){
        super();
        this.limit = 2;
        this.page = 2;
        this.size = 2;
        this.items = {};
        this.total = 20;
        this.hasBefore = this.computeBefore(this.page, this.pages);
        this.hasNext = this.computeNext(this.page, this.pages);
        this.hasPages = this.computeHasPage(this.items.size, this.total);
       
    }

    ready() {
      super.ready();
    }

    set page(val){
        let oldVal = this._page;
        this._page = val;
        this.requestUpdate('page', oldVal);
        this.onPageChange(this._page, oldVal);
        this.observePageCount(this._page, this.limit, this.total);
    }

    get page(){
        return this._page;
    }

    set limit(val){
        let oldVal = this._limit;
        this._limit = val;
        this.requestUpdate('limit', oldVal);
        this.observePageCount(this.page, this._limit, this.total);
    }

    get limit(){
        return this._limit;
    }

    set total(val){
        let oldVal = this._total;
        this._total = val;
        this.requestUpdate('total', oldVal);
        this.observePageCount(this.page, this.limit, this._total);
    }

    get total(){
        return this._total;
    }

    set size(val){
        let oldVal = this._size;
        this._size = val;
        this.requestUpdate('size', oldVal);
        
    }

    get size(){
        return this._size;
    }

    computeBefore(page, pages) {
        return page > 1;
    }

    computeNext(page, pages) {
        return page < pages;
    }

    computeHasPage(itemsLength, total) {
        return itemsLength < total;
    }

    observePageCount(page, limit, total) {
        if (limit && total) {
            this.pages = parseInt(Math.ceil(parseFloat(total) / parseFloat(limit)));
        }

        if (page && limit && total) {
            let items = [];
            let firstIndex = this._firstIndex(page, this.size);
            let lastIndex = this._lastIndex(page, this.size);
            for (var num = firstIndex; num <= lastIndex; num++) {
                items.push(num);
            }
            this.items = items;
        }
    }

    onPageChange(newValue, oldValue){
        this.dispatchEvent(new CustomEvent('page-change', {detail: {newPage: newValue, oldPage:oldValue}}));
    }
    
    _firstIndex(page, size) {
        let index = page - size;
        if (index < 1) {
            return 1;
        } else {
            return index;
        }
    }

    _lastIndex(page, size) {
        let index = parseInt(page) + parseInt(size);
        if (index > this.pages) {
            return this.pages;
        } else {
            return index;
        }
    }

    isCurrent(index, page) {
        return index == page;
    }

    onChange(item) {
        this.page = item;
        this.requestUpdate();
    }

    onBefore(event) {
        this.page = this.page > 0 ? this.page - 1 : 1;
    }

    onNext(event) {
        this.page = this.page < this.pages ? parseInt(this.page) + 1 : this.pages;
    }
    onBegin(event) {
        this.page = 1;
    }

    onEnd(event) {
        this.page = this.pages;
    }

    connectedCallback(){
        super.connectedCallback();
        // const {res} = axios.get("/pending_user_list").catch(err => {return err});
        // const {res} =[
            // {"id": 5, "name": "hiccup", "email": "hiccup@test.com"},
            // {"id": 16, "name": "artist", "email": "artist@test.com"},
        // ]
        // this.membersInfo = res;
        // this.membersInfo=[
        //   {
        //    "count": 15, 
        //    "member":[
        //     {"id": 5, "name": "hiccup", "email": "hiccup@test.com"},
        //     {"id": 16, "name": "artist", "email": "artist@test.com"},
        //     ]
        //   }
        // ];
        this.membersInfo={
          "count" : 15 ,
          "contents":
             [
             {"id": 5, "name": "hiccup", "email": "hiccup@test.com"},
             {"id": 16, "name": "artist", "email": "artist@test.com"},
             ]
         }
        // this.members=this.membersInfo.contents;
    }

    // loadcontent()
    // {
    //   var i = 0;
    //   var customarray = this.membersInfo.contents;
      
    //   do {
    //     this._rowTemplate(customarray[i],i);
    //     console.log(customarray[i]);
    //   } while (i < this.membersInfo.contents.length);
    // }
// ${this._rowTemplate([[item]],[[index]])};

/* <tempate is = "dom-repeat" items = [[employees]] as = "e">
            <tbody>
              <tr>{{index}}</tr>
              <td>{{e.name}}</td>
              <td>{{e.email}}</td>
            </tbody>
        </tempate> */
      _getBody(){
        console.log(this.employees[0].first);
        return html`
        <template is="dom-repeat" items="[[employees]]" as ="e">
            <div>First name: <span>{{index}}</span></div>
            <div>First name: <span>{{e.first}}</span></div>
            <div>Last name: <span>{{e.last}}</span></div>
        </template>
        
        `
      }
      
      _rowTemplate(member, index){
        return html`
            <tr id=${index}>            
            <td>${member.name}</td>
            <td>${member.email}</td>
          </tr>
        `
      }
      
      _getHeaders(){
        const tableHeaders = [
            {
                id: 'no',
                sortable: true,
                headerId: 'No'
            },
            {
            id: 'name',
            sortable: true,
            headerId: 'Name'
            },

          {
            id: 'email',
            sortable: true,
            headerId: 'Email'
          },

        ];
        return html`
          <thead>
            <tr>
              <th>No</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Confirm</th>
            </tr>
          </thead>
        `
      }
      
      _getHeaderTemplate({id, sortable, headerId}){
        let sortIcon;
        if(sortable && this.currentlySortedColumnId === headerId){
          sortIcon = html`
            <i class="${this.sortingDirectionClass}"></i>
          `
        }else if(sortable){
          sortIcon = html`
            <i class="bi bi-arrow-down-up"></i>
          `
        }else{
          sortIcon = html``;
        }

        return html`
          <th
            title="${headerId}"
          >${id}${sortIcon}</th>
        `
      }

      render(){
        return html`
          <div class="table table-responsive">
          
            <table id="customers">
              ${this._getHeaders()}
              ${this._getBody()}
            </table>
          </div>          
        `
      }

/*
    render(){
        return html`
        <iron-iconset-svg name="pagination-icons" size="24">
            <svg>
                <defs>
                    <g id="fast-forward">
                        <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path>
                    </g>
                    <g id="fast-rewind">
                        <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path>
                    </g>
                    <g id="navigate-before">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    </g>
                    <g id="navigate-next">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </g>
                </defs>
            </svg>
        </iron-iconset-svg>
        <div class="paginator-page-container vertical-section-container centered">
            <table id=customers>
            
                <tr>
                <th>No</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Confirm</th>
                </tr>
                <tr>
                <td>1</td>
                <td>JM</td>
                <td>jm@cloud.com</td>
                <td>
                    <span>
                    <a
                    id="aBtn"
                    class="allowBtn buttons"
                    on-tap="changeTab"
                    >Allow</a
                    >
                    <a
                    id="dBtn"
                    class="denyBtn buttons"
                    on-tap="changeTab"
                    hidden$="[[!tags.length]]"
                    >Deny</a
                    >
                    </span>
                </td>
                </tr>
                <tr>
                <td>2</td>
                <td>KJ</td>
                <td>jm@cloud.com</td>
                <td>
                    <span>
                    <a
                    id="aBtn"
                    class="allowBtn buttons"
                    on-tap="changeTab"
                    >Allow</a
                    >
                    <a
                    id="dBtn"
                    class="denyBtn buttons"
                    on-tap="changeTab"
                    hidden$="[[!tags.length]]"
                    >Deny</a
                    >
                </span>
                </td>
                </tr>
                <tr>
                <td>3</td>
                <td>SG</td>
                <td>jm@cloud.com</td>
                <td>
                    <span>
                    <a
                    id="aBtn"
                    class="allowBtn buttons"
                    on-tap="changeTab"
                    >Allow</a
                    >
                    <a
                    id="dBtn"
                    class="denyBtn buttons"
                    on-tap="changeTab"
                    hidden$="[[!tags.length]]"
                    >Deny</a
                    >
                    </span>
                </td>
                </tr>
                <tr>
                <td>4</td>
                <td>SR</td>
                <td>sr@cloud.com</td>
                <td>
                    <span>
                    <a
                    id="aBtn"
                    class="allowBtn buttons"
                    on-tap="changeTab"
                    >Allow</a
                    >
                    <a
                    id="dBtn"
                    class="denyBtn buttons"
                    on-tap="changeTab"
                    hidden$="[[!tags.length]]"
                    >Deny</a
                    >
                    </span>
                </td>
                </tr>
            </table>
            <div  style="text-align:center;">
            <paper-icon-button icon="pagination-icons:fast-rewind" @click="${event => this.onBegin()}" ?hidden="${!this.hasBefore}"></paper-icon-button>
            <paper-icon-button icon="pagination-icons:navigate-before" @click="${event => this.onBefore()}" ?hidden="${!this.hasBefore}"></paper-icon-button>
            <span>Page</span>
            ${this.items.map(item => html`
                <paper-button
                        raised="${!this.isCurrent(item, this.page)}"
                        ?disabled="${this.isCurrent(item, this.page)}"
                        @click="${event => this.onChange(item)}">
                    ${item}
                </paper-button>
            `)}

            <span>of</span>
            ${this.pages}
            <paper-icon-button icon="pagination-icons:navigate-next" @click=${event => this.onNext()} ?hidden="${!this.hasNext}"></paper-icon-button>
            <paper-icon-button icon="pagination-icons:fast-forward" @click=${event => this.onEnd()} ?hidden="${!this.hasNext}"></paper-icon-button>
        
            </div>
        </div>
        `
    }
    */
}

customElements.define('lit-pagination', LitPagination);
