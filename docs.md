# COMANDOS GIT

## 1. iniciar un repositorio local

- solo para los que estan iniciando el proyeto desde cero

```
git init
#El resultado 
#Initialized empty Git repository in C:/Users/Richard/Desktop/Tesis Fla/Web/gordo/.git/

```

- Para los que ya tienen el proyecto 

```
git clone <direccion remota>
```

-Para verificar el estado de cambios del proyecto 

```
git status
```

-Para agregar todos los archivos a la zona intermedia

```
    git add . 

    o

    git add <nombre archivo> 
```

-Para agregar al HEAD

```
    git commit -m "Primer commit"
```

### Listo para enviar al repositorio remoto

- Si quieres conectar tu repositorio local con el repositorio remoto:

```
    git remote add origin <server>
    git remote add origin https://github.com/fla1004/app-pedidos.git
```
-Para verificar direcciones remotas 

```
    git remote -v
```

-Por ultimo: para subir del repositorio local al repositorio remoto

```
    git push -u origin master
```

