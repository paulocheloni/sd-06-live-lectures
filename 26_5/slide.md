26_5
---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->
# 26.5 - Praticando express

<!-- slide vertical=true -->

## O que vamos aprender?

1. Anatomia de um middleware
2. Lidando com erros
	
<!-- slide -->

## Anatomia de um middleware

<!-- slide vertical=true -->

### Objeto req

* req.query
* req.body
* req.params
* req.headers
* req.path
* req.method

### Objeto res

* res.send
* res.json
* res.status
* res.end

### Objeto app

* app.get
* app.post
* app.put
* app.delete
* app.use

### Objeto next

* next
* next(err)
* `req.something = :value`

