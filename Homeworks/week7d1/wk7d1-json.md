## Relationship Objects 

### Overview

Relationships must be an object and maybe one-to-many, which is when a record in Table A can have many matching records in Table B, but a record in Table B has only one matching record in Table A. 

``` 
// ...
{
  "type": "articles",
  "id": "1",
  "attributes": {
    "title": "Rails is Omakase"
  },
  "relationships": {
    "author": {
      "links": {
        "self": "http://example.com/articles/1/relationships/author",
        "related": "http://example.com/articles/1/author"
      },
      "data": { "type": "people", "id": "9" }
    }
  },
  "links": {
    "self": "http://example.com/articles/1"
  }
}
// ...

Above, here is an example where the value of `relationships` is an author object representing the author of the given article. 

The author relationship provides a link in which allows the client to change the author whenever needed, as well as a related resource link to fetch the resource objects, and link information.
