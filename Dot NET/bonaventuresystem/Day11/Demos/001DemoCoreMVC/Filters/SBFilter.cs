using Microsoft.AspNetCore.Mvc.Filters;

namespace _001DemoCoreMVC.Filters
{

    [AttributeUsage(AttributeTargets.Class| AttributeTargets.Method, Inherited =true)]
    public class SBFilter :Attribute,  IActionFilter, IResultFilter, IExceptionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {

        }

        public void OnException(ExceptionContext context)
        {
           
        }

        public void OnResultExecuted(ResultExecutedContext context)
        {
           
        }

        public void OnResultExecuting(ResultExecutingContext context)
        {
           
        }
    }
}
