using _001DemoCoreMVC.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace _001DemoCoreMVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("policy1")]
    public class EmpsController : ControllerBase
    {
        public PGDACDbContext dbContext{ get; set; }
        public EmpsController(PGDACDbContext _dbcontext)
        {
            dbContext = _dbcontext;
        }

        [HttpGet]
        public IEnumerable<Emp> Get()
        {
            return dbContext.Emps.ToList();
        }

       
        [HttpGet("{id}")]
        public Emp Get(int id)
        {
            return dbContext.Emps.Find(id);
        }

        [HttpPost]
        public void Post([FromBody] Emp emp)
        {
            dbContext.Emps.Add(emp);
            dbContext.SaveChanges();
        }

     
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Emp updated)
        {
           var emp =  dbContext.Emps.Find(id);
            emp.Name = updated.Name;
            emp.Address = updated.Address;
            emp.Age = updated.Age;

            dbContext.SaveChanges();
        }

    
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var emp = dbContext.Emps.Find(id);
            dbContext.Emps.Remove(emp);
            dbContext.SaveChanges();
        }
    }
}
