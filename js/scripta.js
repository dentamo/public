app.get('/employee/:id/photo', (req, res) => {
    const employeeId = req.params.id;
  
    // Fetch the employee document from the database using the ID
    db.collection('employee').findOne({ _id: ObjectId(employeeId) }, (err, employee) => {
      if (err) {
        console.error('Error finding employee:', err);
        return res.status(500).send('Internal Server Error');
      }
  
      if (!employee) {
        console.log('Employee not found!');
        return res.status(404).send('Employee not found');
      }
  
      // Read the employee photo file from the file system
      const photoPath = `uploads/${employee.image}`;
      fs.readFile(photoPath, (err, data) => {
        if (err) {
          console.error('Error reading employee photo:', err);
          return res.status(500).send('Internal Server Error');
        }
  
        // Set the appropriate content type and send the photo data in the response
        res.set('Content-Type', 'image/jpeg');
        res.send(data);
      });
    });
  });
