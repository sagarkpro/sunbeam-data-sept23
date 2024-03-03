using _001DemoCoreMVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.Xml;
using _001DemoCoreMVC.Filters;
namespace _001DemoCoreMVC.Controllers
{
    [SBFilter]
    public class  BaseController: Controller
    {

    }
    public class TestController : BaseController
    {
        public IActionResult Index()
        {
            Emp emp = new Emp() { No = 1, Name = "Sachin", Address = "Mumbai" };
            Book book = new Book() { ISBN = 9898988, Title = "HMAD" };

            //ViewData.Add("MyMessage", "Hi from controller");
            //ViewData.Add("AnotherMessage", "Testing");
            //ViewData.Add("mybook", book); //This needs a typecasting in Ui- pls avoid


            ViewBag.MyMessage =  "Hi from controller";
            ViewBag.AnotherMessage =  "Testing";

            ViewBag.mybook = book;



            return View("Index", emp);
        }


        //[SBFilter]
        public IActionResult Demo()
        {
                bool flag = true;
                //bool flag = false;

                if (flag)
                {
                    throw new Exception("My Exception");
                }
                else
                {
                    return View("Demo");
                }

            //try
            //{
            //    bool flag = true;
            //    //bool flag = false;

            //    if (flag)
            //    {
            //        throw new Exception("My Exception");
            //    }
            //    else
            //    {
            //        return View("Demo");
            //    }
            //}
            //catch (Exception ex)
            //{
            //    return View("Error", ex);
            //}
        }
    }
   
}
