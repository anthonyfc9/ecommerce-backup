# eccomerce website

this is a web store with payment using paypal, if you want to use this repo make sure to change config.js to add your own mongodb link. then make sure to create a .env file with this inside of it and edit the config.js in the backend folder


```bash
MONGODB_URL=mongodb://localhost/yourmongodbName
JWT_SECRET = somethingSecret
```
# superuser

change super user under backend/routes/userRoutes

```bash
router.get('/createadmin', async (req, res) => {
    try {
      const user = new User({
        name: 'YourName',
        email: 'yourEmail@email.com',
        password: 'Password',
        isAdmin: true,
      });
        const newUser = await user.save();
        res.send(newUser);
      } catch (error) {
        res.send({ message: error.message });
      }
    });
```

everything else should be left alone, you can edit the screens to add classes and modify them with css and you can create new components to add on the homescreen or other components. everything is fully functional